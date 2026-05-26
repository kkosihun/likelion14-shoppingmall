import { useState } from "react";
import styled from "styled-components";
import XUrl from "../../../assets/icons/X_Icon.png"

//성별 버튼
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
`;

const Modal = styled.div`
    position: fixed;       /* 화면에 고정 */
    top: 50%;              /* 화면 세로 중앙 */
    left: 50%;             /* 화면 가로 중앙 */
    transform: translate(-50%, -50%);  /* 정확히 중앙으로 맞춤 */
    background: #fff;      /* 흰 배경 */
    border-radius: 25px;   /* 모서리 둥글게 */
    z-index: 101;          /* Overlay보다 위에 올라옴 */
    width: 296px;          
    hight: 156px;
    padding: 30px 33px 48px 35px;   
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 26px 187px;
    flex-wrap: wrap;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ModalTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const OptionList = styled.div`
    display: flex;
    margin-right:13px;
    gap: 13px;
    width: 100%;
    
`;

const OptionButton = styled.button`
    flex: 1;
    padding: 8px 0;
    border-radius: 25px;
    border: 0px solid #E5E5E5;
    background: #F2F2F2;
    font-size: 13px;
    color: #616161;
    cursor: pointer;
    font-family: Pretendard;
    
`;

const XIcon = styled.img`
    width: 13px;
    height: 13px;  
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;



export default function Gender({onClose}){
    return (
        <>
        
            <Overlay onClick={onClose} />
            <Modal>
                <ModalHeader>
                    <ModalTitle>성별</ModalTitle>
                    <CloseButton onClick={onClose}><XIcon src={XUrl}/></CloseButton>
                </ModalHeader>
                <OptionList>
                    <OptionButton>남성</OptionButton>
                    <OptionButton>여성</OptionButton>
                    <OptionButton>남녀공용</OptionButton>
                </OptionList>   
            </Modal>
        </>
    );
}