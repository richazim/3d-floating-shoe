import { proxy } from "valtio";

export const shoeColorStore = proxy({                                                                                                                                                                                                              
    selectedShoePart: null,
    colors: {
        laces: "#ffffff",
        mesh: "#ffffff",
        caps: "#ffffff",
        inner: "#ffffff",
        sole: "#ffffff",
        stripes: "#ffffff",
        band: "#ffffff",
        patch: "#ffffff",
    }

})

// store global créé avec proxy(...)