import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components"
import axios from '../axios';
import CloseIcon from '@mui/icons-material/Close';
import url from 'url';

function ListHouse() {
    function lsTest() {
        var test = 'test';
        try {
          localStorage.setItem(test, test);
          localStorage.removeItem(test);
          return true;
        } catch (e) {
          return false;
        }
    }
    var storageObj = lsTest() ? localStorage : sessionStorage
    storageObj.getItem("formInput") === null && storageObj.setItem("formInput", JSON.stringify({
        address : "",
        description : "",
        price : "",
        type : "",
        year : "",
        area: "",
        beds : "",
        baths : ""
    }))
    const [highlight, setHighlight] = useState(false)
    const [srcs, setSrcs] = useState([])
    const form = useRef()
    const [year, setYear] = useState('')
    const submitForm = async (event) => {
        const property = {
            images : ["/houseImage.jpg", "/houseImage2.jpg", "/houseImage3.jpg", "/houseImage4.jpg"],
            address : form.current.getElementsByTagName("input")['address'].value,
            description : form.current.getElementsByTagName("textarea")['description'].value,
            price : parseFloat(form.current.getElementsByTagName("input")['price'].value),
            type : form.current.getElementsByTagName("input")['propertyType'].value,
            year : year,
            area: parseFloat(form.current.getElementsByTagName("input")['SqFt'].value),
            beds : parseInt(form.current.getElementsByTagName("input")['beds'].value),
            baths : parseInt(form.current.getElementsByTagName("input")['baths'].value)
        }
        storageObj.setItem("formInput", JSON.stringify({
            address : "",
            description : "",
            price : "",
            type : "",
            year : "",
            area: "",
            beds : "",
            baths : ""
        }))
        axios.post('/add-property', {...property}).then(
            window.location.replace("/")
        )
    }
    function handleFiles(e) {
        let files = e.dataTransfer? e.dataTransfer.files : e.target.files
        files = [...files]
        
        files.map((file) => {
            setSrcs((srcs) =>[...srcs, URL.createObjectURL(file)])
            return 0;
        })
        try{
            e.target.value = ''
        } catch(err){
            console.log(err)
        }
    }
    const handleAddressChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["address"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleDescriptionChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["description"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handlePriceChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["price"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleTypeChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["type"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleYearChange = (e) => {
        if(parseInt(e.target.value) && parseInt(e.target.value) < parseInt(new Date().getFullYear())){
            setYear(parseInt(e.target.value))
        } else if(e.target.value === ''){
            setYear('')
        }
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["year"] = e.target.value
        console.log(formInput, formInput.year)
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleAreaChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["area"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleBedChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["beds"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }
    const handleBathChange = (e) => {
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        formInput["baths"] = e.target.value
        storageObj.setItem("formInput", JSON.stringify(formInput))
    }

    useEffect(() => {
      if(storageObj.getItem("formInput")){
        var formInput = JSON.parse(storageObj.getItem("formInput"))
        form.current.getElementsByTagName("input")['address'].value = formInput["address"]
        form.current.getElementsByTagName("textarea")['description'].value = formInput["description"]
        form.current.getElementsByTagName("input")['price'].value = formInput["price"] ? formInput["year"] : ''
        form.current.getElementsByTagName("input")['propertyType'].value = formInput["type"]
        form.current.getElementsByTagName("input")['year'].value = formInput["year"] ? formInput["year"] : '' 
        form.current.getElementsByTagName("input")['SqFt'].value = formInput["area"] ? formInput["area"] : ''
        form.current.getElementsByTagName("input")['beds'].value = formInput["beds"] ? formInput["beds"] : ''
        form.current.getElementsByTagName("input")['baths'].value = formInput["baths"] ? formInput["baths"] : ''
      }
    }, [])
    
    return (
        <DragDrop>
            <h1>List A House</h1>
            <form ref={form}>
                <label>Property Address</label>
                <input id="address" type="text" onChange={handleAddressChange}></input>
                <label>Description</label>
                <textarea id="description" onChange={handleDescriptionChange}></textarea>
                <fieldset>
                    <label
                        id="DragDropArea"
                        className={highlight ? "highlight" : ""}
                        onDragEnter={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setHighlight(true)
                        }}
                        onDragOver={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setHighlight(true)
                        }}
                        onDragLeave={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setHighlight(false)
                        }}
                        onDrop={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setHighlight(false)
                            handleFiles(e)
                        }}
                        onClick={(e) => {
                            if(e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON"){
                                e.preventDefault()
                            }
                        }}
                    >
                        <span>Drag drop shenanigans (dummy)</span>
                        <input type="file" id="fileUpload" accept="image/png, image/jpeg" multiple
                            onChange={handleFiles}
                        ></input>
                        </label>
                        <ul id="image-section">
                            {srcs.map((src, i) => {
                                return <li key={i}>
                                            <img src={src} alt="iono"></img>
                                            <CustomCloseIcon onClick={() => setSrcs((src) => src.filter((_,index) => index!== i))}/>
                                        </li>
                            })}
                        </ul>
                </fieldset>
                <label>Price</label>
                <input id="price" type="number" onChange={handlePriceChange}></input>
                <label>Square Feet</label>
                <input id="SqFt" type="number" onChange={handleAreaChange}></input>
                <label>Property Type</label>
                <input type="text" id="propertyType" onChange={handleTypeChange}></input>
                <label>Year Built</label>
                <input type="text" id="year" value={year}
                onChange={handleYearChange}
                ></input>
                <label className='smallData'>Bedrooms</label>
                <input id="beds" className='smallData' type="number" onChange={handleBedChange}></input>
                <label className='smallData'>Bathrooms</label>
                <input id="baths" className='smallData' type="number" onChange={handleBathChange}></input>
                <button type="button"
                    onClick={submitForm}
                >Submit Form</button>
            </form>
        </DragDrop>
    )
}

export default ListHouse

const DragDrop = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr minmax(100px, 56.25em) 1fr;
    h1{
        grid-column: 2 / 2;
        padding: 30px 0 16px 20px;
        font-size: 34px;
        line-height: 48px;
    }
    form{
        display: grid;
        grid-column: 2 / span 1;
        grid-template-columns: repeat(12, 1fr);
        grid-row-gap: 4px;
        width: 100%;
        max-width: 56.25em;
        padding: 20px;
        margin: 0 auto;
        align-items: baseline;
        > input, > fieldset, > label, > textarea{
            grid-column-end: span 12;
        }
        label{
            text-transform: uppercase;
            letter-spacing : 2px;
            font-size: 18px;
            font-weight: 500;
            height: max-content;
        }
        > input, > textarea{
            background-color: #e7e7e7;
            padding:4px 8px;
            margin-bottom: 16px;
            border-bottom: 3px solid transparent;
            font-size: 16px;
            line-height: 20px;
            position: relative;
            transition: all 0.5s;
            border-radius: 2px;
            :focus-within{
                border-color: #7accd9;
                box-shadow: inset 0px -6px 20px -13px #7accd9;
            }
        }
        textarea{
            height: 6em;
        }
        @media only screen and (min-width: 56.25em) {
            .smallData{
                grid-column-end: span 3;
            }
            input.smallData ~ label.smallData{
                margin-left: 20px;
            }
        }
        fieldset{
            height: max-content;
            width: 100%;
            padding: 0;
            outline: none;
            border: 0;
            margin: 20px 0 24px 0;
            display: grid;
            #DragDropArea{
                height: 250px;
                border: 2px dashed #ccc;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                input{
                    background-color: transparent;
                    margin-top: 20px;
                    width: 170px;
                    padding: 0;
                    ::file-selector-button{
                        visibility: hidden;
                        display: none;
                    }
                    ::-webkit-file-upload-button, ::-ms-browse{
                        visibility: hidden;
                        display: none;
                    }
                    ::before {
                        content: 'Select some files';
                        display: inline-flex;
                        justify-content: center;
                        cursor: pointer;
                        background: blue;
                        border-radius: 3px;
                        padding: 10px 10px;
                        outline: none;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 24px;
                        color: #fff;
                        width: 150px;
                    }
                }
            }
            .highlight{
                border-color: #7accd9!important;
            }
            #image-section{
                display: flex;
                flex-direction: row;
                width: 100%;
                max-height: 180px;
                font-size: 14px;
                overflow-x: auto;
                overflow-y: hidden;
                margin: 10px 0 0 0;
                padding: 0 4px;
                li{
                    height: 160px;
                    border-radius: 4px;
                    position: relative;
                    img{
                        height: 100%;
                        border-radius: 4px;
                    }
                    svg{
                        display: none!important;
                    }
                    :hover svg{
                        display: inline-block!important;
                    }
                }
                li ~ li{
                    margin: 0 0 0 10px;
                }
            }
        }
    }
`

const CustomCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    margin: 5px 5px 0 0;
    background-color: #ffffff60;
    cursor: pointer;
    :hover{
        background-color: #ff6464;
        color: #ffffff;
    }
`