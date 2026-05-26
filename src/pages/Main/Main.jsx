import Filter from "../../components/common/filter/Filter";
import Sorting from "../../components/common/sorting/Sort";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { getItems } from "../../api/shop";
import ItemCard from "../../components/common/images/ItemCard";

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    row-gap: 35px;
    padding: 0 153px;
    margin-top: 20px;
`;

export default function Main(){
    const [items, setItems] = useState([]);

    useEffect(() => {
    let cancelled = false;
    (async () => {
        try {
            const [clothes, shoes] = await Promise.all([
                getItems("clothes", { sort: "oldest" }),
                getItems("shoes", { sort: "oldest" }),
            ]);
            const all = [
                ...(Array.isArray(clothes) ? clothes : []).map(it => ({ ...it, itemType: "clothes" })),
                ...(Array.isArray(shoes) ? shoes : []).map(it => ({ ...it, itemType: "shoes" })),
            ];
            if (!cancelled) setItems(all);
        } catch (err) {
            console.error(err);
            if (!cancelled) setItems([]);
        }
    })();
    return () => { cancelled = true; };
}, []);

    return (
        <div>
            <Filter />
            <Sorting />
            <ItemContainer>
                {items.map((item) => (
                    <ItemCard
                        key={`${item.itemType}-${item.id}`}
                        itemId={item.id}
                        itemType={item.itemType}
                        image={item.image}
                        name={item.name}
                        price={`${Number(item.price).toLocaleString()}원`}
                        reviewCount={item.reviews}  // reviewConut 오타 수정
                    />
                ))}
            </ItemContainer>
        </div>
        );
        
    }
