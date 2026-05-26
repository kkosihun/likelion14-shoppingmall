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
    background: #fff;
    border-radius: 25px;
    z-index: 101;
    width: 296px;
    padding: 30px 33px 48px 35px;
    display: flex;
    flex-direction: column;
    gap: 26px;
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

const XIcon = styled.img`
    width: 13px;
    height: 13px;
`;

const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const OptionRow = styled.div`
    display: flex;
    gap: 10px;
`;

const OptionButton = styled.button`
    padding: 8px 20px;
    border-radius: 25px;
    border: none;
    background: #F2F2F2;
    font-size: 13px;
    color: #616161;
    cursor: pointer;
    font-family: Pretendard;
`;

export default function Size({ onClose }) {
    return (
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <ModalHeader>
                    <ModalTitle>사이즈</ModalTitle>
                    <CloseButton onClick={onClose}>
                        <XIcon src={XUrl} />
                    </CloseButton>
                </ModalHeader>
                <OptionList>
                    <OptionRow>
                        <OptionButton>9</OptionButton>
                        <OptionButton>10</OptionButton>
                    </OptionRow>
                    <OptionRow>
                        <OptionButton>S</OptionButton>
                        <OptionButton>M</OptionButton>
                        <OptionButton>L</OptionButton>
                        <OptionButton>XL</OptionButton>
                    </OptionRow>
                </OptionList>
            </Modal>
        </>
    );
}