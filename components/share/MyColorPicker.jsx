import { shoeColorStore } from "@/store/shoeColorStore";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";

const MyColorPicker = () => {
    const snapshot = useSnapshot(shoeColorStore);

    return (
        <div style={{
            display: snapshot.selectedShoePart ? "block" : "none"
        }}>
            <div className="absolute top-[54px] left-[70px]">
            <HexColorPicker
                className="w-[120px] h-[120px]"
                color={snapshot.colors[snapshot.selectedShoePart]}
                onChange={(color) => {
                    shoeColorStore.colors[snapshot.selectedShoePart] = color
                }}
            />
            <h2 className="text-[20px] font-bold">Shoe part: {snapshot.selectedShoePart}</h2>
        </div>
        </div>
    )
}
// useSnapshot est hook de Valtio qui observe le proxy (état réactif) shoeColorStore

// snap est une copie lisible en lecture seule de l’état actuel 

export default MyColorPicker;

// selectedShoePart sera defini quand on touche à une partie de la chaussure