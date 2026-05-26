import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <ProductContext.Provider value={{ 
            selectedProduct, 
            setSelectedProduct,
            showDeleteModal,
            setShowDeleteModal,
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    return useContext(ProductContext);
}