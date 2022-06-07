import { placeholder } from '@babel/types'
import{useState} from 'react'
import styled from "styled-components"


function Filter() {
    // Use sort and filter
    const [appliedFilters, setAppliedFilters] = useState(["minPrice", "maxPrice", "priceSort", "propertyType", "yearBuilt", "yearSort", "beds", "bedSort", "baths", "bathSort", "minsqFt", "maxsqFt", "sqFtSort", "zip", "minPriceSqFt", "maxPriceSqFt", "priceSQFtSort"])
    const [filter, setFilter] = useState(
        {
            minPrice : {
                type : "dropdownInput",
                text: "Minimum Price of ",
                placeholder : "$",
                placeholderPosition: "left",
                values : [0, 1000, 2000, 3000, 4000, 6000, 8000, 10000, 15000],
                valueIndex : 0
            },
            maxPrice : {
                type : "dropdownInput",
                text : "Maximum Price of ",
                placeholder : "$",
                placeholderPosition: "left",
                values : [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000],
                valueIndex : 7
            },
            priceSort : {
                type : "sort",
                text : "Price",
            },
            propertyType : {
                type : "dropdown",
                text : "Housing Type: ",
                placeholder : "home",
                placeholderPosition: "right",
                values : ["All", "Apartment", "Single-Family", "Condo", "Townhouse", "Multi-Family", "Co-op", "Commercial"],
                valueIndex : 0
            },
            yearBuilt : {
                type : "dropdownInput",
                text : "Built before ",
                placeholder : "",
                placeholderPosition : "left",
                values :[2022, 2020, 2018, 2016, 2014, 2012, 2010, 2008, 2006, 2004, 2002, 2000],
                valueIndex : 0
            },
            yearSort : {
                type : "sort",
                text : "Year",
            },
            beds : {
                type : "dropdownInput",
                text : "Contains at least ",
                placeholder : "bedrooms",
                placeholderSingular : [1, "bedroom"],
                placeholderPosition : "right",
                values : [0, 1, 2, 3, 4, 5, 6],
                valueIndex : 0

            },
            bedSort : {
                type : "sort",
                text : "Bedrooms",
            },
            baths : {
                type : "dropdownInput",
                text : "Contains at least ",
                placeholder : "bathrooms",
                placeholderSingular : [1, "bathroom"],
                placeholderPosition: "right",
                values : [0, 1, 2, 3],
                valueIndex : 0
            },
            bathSort : {
                type : "sort",
                text : "Bathrooms",
            },
            minsqFt : {
                type : "dropdownInput",
                text: "Minimum Sq Ft of ",
                placeholder : "sq. ft",
                placeholderPosition: "left",
                values: [0, 1000, 2000, 3000, 4000, 4100, 4500, 5000, 5500, 6500],
                valueIndex: 0
            },
            maxsqFt : {
                type : "dropdownInput",
                text: "Maximum Sq Ft of ",
                placeholder : "sq. ft",
                placeholderPosition: "left",
                values: [5000, 10000, 20000, 30000, 40000, 41000, 45000, 50000, 55000, 65000],
                valueIndex: 0
            },
            sqFtSort : {
                type : "sort",
                text : "SQ Ft",
            },
            zip : {
                type : "dropdownInput",
                text : "Zip Code: ",
                placeholder : "",
                placeholderPosition: "left",
                values : [60000, 60001, 60002, 60003, 60004, 60005, 60006, 60007, 60008],
                valueIndex : 0,
            },
            minPriceSqFt : {
                type : "dropdownInput",
                text : "Minimum psf of ",
                placeholder : "psf",
                placeholderPosition: "right",
                values : [0, 1000, 2000, 3000, 4000, 6000, 8000, 10000, 15000],
                valueIndex : 0
            },
            maxPriceSqFt : {
                type : "dropdownInput",
                text : "Maximum psf of ",
                placeholder : "psf",
                placeholderPosition: "right",
                values : [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000],
                valueIndex : 7
            },
            priceSQFtSort : {
                type : "sort",
                text : "Price Sq Ft",
            }
        }
    )
    return (
        <FilterContainer>
            {appliedFilters.map((filterIndex, i) => {
                return (<li key={i}>{filter[filterIndex].text} {filter[filterIndex].type !== "sort" && filter[filterIndex].values[filter[filterIndex].valueIndex]}</li>)
            })}
        </FilterContainer>
    )
}

export default Filter

const FilterContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
        white-space: nowrap;
        padding: 20px 5px;
        background-color: rgb(242 242 242);
        border-radius: 4px;
        // margin: 0 4px 4px 4px;
        width: max-content;
        display: flex;  
        cursor: pointer;
        margin: 4px 8px;
        flex-direction: row;
        align-items: center;
        height: 30px;
        transition: 0.1s ease-in-out;
    }
`
