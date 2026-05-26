import { useState } from "react";
import styled from "styled-components";
import VectorUrl from "../../../assets/icons/vector_icon.png"
import XUrl from "../../../assets/icons/X_Icon.png"
import Gender from "./Gender"
import Color from "./Color"
import Size from "./Size"
import Price from "./Price"
import Category from "./Category"

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 153px;
    margin-top: 22px;
`;

const FilterList = styled.div`
    display: flex;
    gap: 13px;
`;

const FilterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;         
    padding: 8px 10px 11px 10px;
    
    
    color: #616161;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    height: 33px;
    
    background: #F2F2F2;
    border: 1px solid #E5E5E5;
    border-radius: 20px;
`;

const VectorIcon = styled.img`
    width: 10px;
    height: 5px;  
    align-self: center;
    flex-shrink: 0;
`;



export default function Filter() {

    const [isOpen, setIsOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    return (
        <>
        <FilterContainer>
            <FilterList>
                <FilterButton onClick={() => setIsOpen(true)}>성별 <VectorIcon src={VectorUrl}/> </FilterButton>
                <FilterButton onClick={() => setIsColorOpen(true)}>색상 <VectorIcon src={VectorUrl}/> </FilterButton>
                <FilterButton onClick={() => setIsSizeOpen(true)}>사이즈 <VectorIcon src={VectorUrl}/></FilterButton>
                <FilterButton onClick={() => setIsPriceOpen(true)}>가격대 <VectorIcon src={VectorUrl}/></FilterButton>
                <FilterButton onClick={() => setIsCategoryOpen(true)}>종류 <VectorIcon src={VectorUrl}/></FilterButton>
            </FilterList>
        </FilterContainer>

        {isOpen && <Gender onClose={() => setIsOpen(false)} />}
        {isColorOpen && <Color onClose={() => setIsColorOpen(false)} />}
        {isSizeOpen && <Size onClose={() => setIsSizeOpen(false)} />}
        {isPriceOpen && <Price onClose={() => setIsPriceOpen(false)} />}
        {isCategoryOpen && <Category onClose={() => setIsCategoryOpen(false)} />}
        </>
        
        
    );
}