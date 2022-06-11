import React, { useState } from 'react'
import styled from "styled-components"

function ListHouse() {
    const [highlight, setHighlight] = useState(false)
    const [srcs, setSrcs] = useState([])
    function handleFiles(e) {
        let files = e.dataTransfer.files
        console.log(files)
        files = [...files]
        files.map((file) => {
            console.log(file)
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setSrcs((srcs) =>[...srcs, reader.result])
            }
            return 0;
            // let formData = new FormData()
            // formData.append("file", file)
            // fetch("./listing", {
            //     method: 'POST',
            //     body: formData
            // }).then(() => {

            // }).catch(() => {

            // })
        })
    }
    return (
        <DragDrop>
            <h1>List A House</h1>
            <form>
                <label>Property Address</label>
                <input id="address"></input>
                <label>Description</label>
                <textarea id="description"></textarea>
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
                    >
                        <input type="file" multiple accept="image/*"></input>
                        <span>Drag drop shenanigans (dummy)</span>
                        <button>Add pictures</button>
                        </label>
                        <figure id="image-section">
                            {srcs.map((src, i) => {
                                return <img src={src} alt="iono" onClick={() => setSrcs((src) => src.filter((_,index) => index!== i))}></img>
                            })}
                        </figure>
                </fieldset>
                <label>Price</label>
                <input id="price"></input>
                <label>Square Feet</label>
                <input id="SqFt"></input>
                <label>Property Type</label>
                <input type="text" id="propertyType"></input>
                <label>Year Built</label>
                <input type="month" id="year"></input>
                <label className='smallData'>Bedrooms</label>
                <input id="beds" className='smallData'></input>
                <label className='smallData'>Bathrooms</label>
                <input id="baths" className='smallData'></input>
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
        input, fieldset, label, textarea{
            grid-column-end: span 12;
        }
        label{
            text-transform: uppercase;
            letter-spacing : 2px;
            font-size: 18px;
            font-weight: 500;
            height: max-content;
        }
        input, textarea{
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
            #DragDropArea{
                height: 250px;
                border: 2px dashed #ccc;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                :hover{
                    border-color: #7accd9!important;
                }
                /* span{
                    margin-top: 36px;
                } */
                button{
                    padding: 16px 18px;
                    background-color: blue;
                    margin-top: 16px;
                    border-radius: 4px;
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 600;
                    color: white;
                }
                input{
                    width: 0;
                    height: 0;
                    display: none;
                }
            }
            .highlight{
                border-color: #7accd9!important;
            }
            #image-section{
                display: flex;
                flex-direction: row;
                width: 100%;
                font-size: 14px;
                max-width: 56.25em;
                overflow-x: auto;
                padding: 10px 0 0 0;
                img{
                    width: 200px;
                    height: 150px;
                    border: 1px solid black;
                }
                img ~ img{
                    margin: 0 0 0 10px;
                }
            }
        }
    }
`