import { useState } from "react";
import styled from "styled-components";
import SortingUrl from "../../../assets/icons/sorting_icon.png"

const SortContainer = styled.div`
    text-align: right;
    padding-right: 183px;
    margin-top: 16px;
    position: relative;
`;

const SortButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #616161;
    font-size: 13px;
    font-family: Pretendard;
    cursor: pointer;
`;

const SortingIcon = styled.img`
    width: 10px;
    height: 11px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 183px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    min-width: 130px;
    z-index: 100;
`;

const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 13px;
    font-family: Pretendard;
    color: ${({ active }) => active ? "#000" : "#888"};
    font-weight: ${({ active }) => active ? "600" : "400"};
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
    }
`;

export default function Sorting() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("기본 정렬순");

    const options = ["기본 정렬순", "평점 높은순", "리뷰 많은순"];

    return (
        <SortContainer>
            <SortButton onClick={() => setIsOpen((prev) => !prev)}>
                정렬순 <SortingIcon src={SortingUrl} />
            </SortButton>

            {isOpen && (
                <Dropdown>
                    {options.map((option) => (
                        <DropdownItem
                            key={option}
                            active={selected === option}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                            {selected === option && <span>✓</span>}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
        </SortContainer>
    );
}