import styled from "styled-components";
import Line from "../../../../src/assets/images/Line 1.png";
import Upload from "../../../../src/assets/icons/upload_Icon.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../../api/shop";
import {
    Container, LeftSection, ImageInsert, PreviewImage, LineImage,
    TotalFrame, NewFrame, Select, NewInfo, Title,
    FieldGroup, Label, Input, ToggleGroup, ColorGroup, ToggleButton, SubmitButton
} from "./ProductFormStyles.jsx";

const UploadIcon = styled.img`
    width: 49px;
    height: 55px;
`;

const HiddenInput = styled.input`
    display: none;
`;

const TYPE_MAP = { "의류": "clothes", "신발": "shoes" };
const GENDER_MAP = { "남성": "male", "여성": "female", "남녀공용": "unisex" };

export default function ProductAdd() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!previewImage) { alert("이미지를 업로드하세요!"); return; }
        if (!productName) { alert("상품명을 입력하세요!"); return; }
        if (!price) { alert("가격을 입력하세요!"); return; }
        if (!selectedType) { alert("종류를 선택하세요!"); return; }
        if (!selectedGender) { alert("성별을 선택하세요!"); return; }
        if (!selectedColor) { alert("색상을 선택하세요!"); return; }

        const body = {
            image: previewImage,
            name: productName,
            rating: Number(rating) || 0,
            reviews: Number(reviews) || 0,
            price: Number(price),
            soldout: false,
            color: selectedColor,
            size: size,
            gender: GENDER_MAP[selectedGender],
            type: TYPE_MAP[selectedType],
        };

        try {
            await createItem(TYPE_MAP[selectedType], body);
            alert("상품이 등록되었습니다!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("등록 실패: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <Container>
            <LeftSection>
                <ImageInsert onClick={handleImageClick}>
                    {previewImage ? <PreviewImage src={previewImage} alt="미리보기" /> : <UploadIcon src={Upload} />}
                </ImageInsert>
                <HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
                <LineImage src={Line} />
            </LeftSection>
            <TotalFrame>
                <NewFrame>
                    <NewInfo>
                        <Title>상품 정보 등록</Title>
                        <Select>
                            <FieldGroup>
                                <Label>상품명</Label>
                                <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>평점</Label>
                                <Input value={rating} onChange={(e) => setRating(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>리뷰수</Label>
                                <Input value={reviews} onChange={(e) => setReviews(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>가격</Label>
                                <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>사이즈</Label>
                                <Input value={size} onChange={(e) => setSize(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>종류</Label>
                                <ToggleGroup>
                                    {["의류", "신발"].map((t) => (
                                        <ToggleButton key={t} $selected={selectedType === t} onClick={() => setSelectedType(t)}>{t}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>성별</Label>
                                <ToggleGroup>
                                    {["남성", "여성", "남녀공용"].map((g) => (
                                        <ToggleButton key={g} $selected={selectedGender === g} onClick={() => setSelectedGender(g)}>{g}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>색상</Label>
                                <ColorGroup>
                                    {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((c) => (
                                        <ToggleButton key={c} $selected={selectedColor === c} onClick={() => setSelectedColor(c)}>{c}</ToggleButton>
                                    ))}
                                </ColorGroup>
                            </FieldGroup>
                            <SubmitButton onClick={handleSubmit}>상품 등록 완료</SubmitButton>
                        </Select>
                    </NewInfo>
                </NewFrame>
            </TotalFrame>
        </Container>
    );
}
