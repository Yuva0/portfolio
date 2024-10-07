import { createContext, useContext, useState, useCallback } from "react";

const VariantContext = createContext({
    variant: "neumorph",
    setVariant: () => {}
});

export const useVariant = () => {
    return useContext(VariantContext);
};

export const useUpdateVariant = () => {
    const { setVariant } = useVariant();
    return useCallback((variant) => {
        setVariant(variant);
    }, [setVariant]);
};

const VariantProvider = ({ variant, children }) => {
    const [_variant, setVariant] = useState(variant);

    const value = {
        variant: _variant,
        setVariant
    };

    return (
        <VariantContext.Provider value={value}>
            {children}
        </VariantContext.Provider>
    );
};

export default VariantProvider;
