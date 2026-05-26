import { useState } from "react";
import styled from "styled-components";
import XUrl from "../../../assets/icons/X_Icon.png"

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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 25px;
    z-index: 101;
    width: 296px;
    padding: 30px 33px 48px 35px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ModalTitle = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const XIcon = styled.img`
    width: 13px;
    height: 13px;
`;


const OptionList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px 8px;
    width: 100%;
`;

const OptionButton = styled.button`
    min-width: 55px;
    padding: 8px 12px; 
    border-radius: 25px;
    border: none;
    background: #F2F2F2;
    font-size: 13px;
    color: #616161;
    cursor: pointer;
    font-family: Pretendard;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
const colors = [
    ["red", "pink", "blue"],
    ["black", "gray", "denim"],
    ["multi", "rainbow", "holographic"]
];
const OptionRow = styled.div`
    display: flex;
    gap: 10px;
`;

export default function Color({ onClose }) {
    return (
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <ModalHeader>
                    <ModalTitle>색상</ModalTitle>
                    <CloseButton onClick={onClose}>
                        <XIcon src={XUrl} />
                    </CloseButton>
                </ModalHeader>
                <OptionList>
                    {colors.map((row, rowIndex) => (
                        <OptionRow key={rowIndex}>
                            {row.map((color) => (
                                <OptionButton key={color}>{color}</OptionButton>
                            ))}
                        </OptionRow>
                    ))}
                </OptionList>
            </Modal>
        </>
    );
}