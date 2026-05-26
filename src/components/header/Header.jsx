import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png"
import homeUrl from "../../assets/icons/home_icon.png"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { useProduct } from "../../pages/Main/ProductDetail/ProductContext.jsx";

// 대문자로 시작! -> 대문자를 컨포넌트로 인식하기 때문
const LogoImage = styled.img`
    width: 166px;
    height: 141px;
`;

const HomeIcon = styled.img`
    width: 61px;
    height: 24px;
`;

const HeaderContainer = styled.div`
    padding-right: 160px;
    padding-left: 160px;
    display: flex;
    justify-content: space-between;
    
`;


//props를 써서 상품등록 페이지에서 색 변경
const Button = styled.div` 
    color: ${props => props.$active ? "#000" : "#6C6C6C"};
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 400;
    margin-top: 9px;
    cursor: pointer;
`;

const HeaderRight = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    display: inline-flex;
    align-items: flex-end;
    gap: 36px;
`;


//추가
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 28px;
`;


export default function Header(){

    const {pathname} = useLocation(); // 현재 페이지 경로 불러오기
    const navigate = useNavigate(); //코드로 페이지 이동시키기
    const buttonName = "상품등록";
    const {type, id} = useParams(); //상세 페이지의 id 가져오기
    const { setShowDeleteModal } = useProduct();
    
    const isHome = pathname ==="/" || pathname === "/add";
    const isDetail = pathname.startsWith("/item"); //상세 페이지(단일 조회) 감지

    return(
        //위쪽
        <div>
            <HeaderContainer>
                <LogoImage src={logoUrl}/>
                <HeaderRight>
                    <ButtonGroup>

                        {isHome && (  //메인 페이지, 상품등록 페이지
                            <Button 
                            $active={pathname === "/add"}
                            onClick={()=>navigate("/add")}>{buttonName}</Button>
                        )}

                        {isDetail &&(           //단일조회 페이지
                            <>
                                <Button onClick={() => navigate("/add")}>{buttonName}</Button>
                                <Button onClick={() => setShowDeleteModal(true)}>상품삭제</Button>
                                <Button onClick={() => navigate(`/item/${type}/${id}/edit`)}>상품수정</Button>
                            </>
                        )}
                    </ButtonGroup>
                    <HomeIcon src={homeUrl}/>
                </HeaderRight>
            </HeaderContainer>
        </div>

    );
}

