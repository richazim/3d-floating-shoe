"use client";

import MyColorPicker from "@/components/share/MyColorPicker";
import { ShoeModel } from "@/components/Shoe";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const RootPage = () => {

    return (
        <div className="w-screen h-screen">
            <Canvas
                camera={{
                    position: [0, 0, 4],
                    fov: 45
                }}
                shadows={true}
            >
                <ambientLight intensity={0.7}/>
                <Environment preset="city" />
                <spotLight angle={0.1} intensity={0.5} position={[10, 15, 10]} penumbra={1} castShadow={true}/>
                <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8}/>
                <OrbitControls minPolarAngle={-Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}/>
                <ShoeModel/>
            </Canvas>

            <MyColorPicker/>
        </div>
    )
}

export default RootPage

// Le modèle 3D du chaussure s'affiche que dans le composant Canvas de react three fiber.

// Le composant Canvas rempli la hauteur et la largeur de son conteneur.

// Le composant Canvas représente la scène 3D complète, et tout ce que tu mets à l'intérieur (objets, lumières, caméras, etc.) sera rendu dans cette scène.

// [0, 0, 4] de camera sur Canvas positionne le caméra au centre de la scène et fov (field of view) le fait voir 45° de large.

// La position de la caméra représente le point de vue depuis lequel l’utilisateur observe la scène 3D, généralement orientée vers le centre de la scène 3D.

// shadows sur Canvas permet d'utiliser des lumières capables de projeter des ombres, comme :  

// ambientLight est une lumière qui éclaire tous les objets de manière égale, peu importe leur orientation ou position.

// spotLight est une lumière qui est orientée vers un point spécifique et projette des ombres sur les objets autour de ce point:
/*
angle	Ouverture du cône de lumière (en radians)
intensity	Force lumineuse
position	Où se trouve la lumière dans l’espace
penumbra	Bord doux du cône (0 = dur, 1 = très doux)
target	(optionnel) vers où la lumière pointe (sinon [0, 0, 0] par défaut)
castShadow	Active les ombres projetées depuis cette lumière
*/

// Environment est un preset de lumière du package react three drei qui peut representer la lumiere d'une ville, la lumiere du lever du soleil. 

// ContactShadows est un composant de @react-three/drei qui génére des ombres douces au sol, appelées ombres de contact, sous les objets 3D:
/*
position={[0, -0.8, 0]} représente la position du centre du plan invisible qui reçoit les ombres (juste sous l’objet 3D).position={[0, -0.8, 0]} représente la position du centre du plan invisible qui reçoit les ombres (juste sous l’objet 3D).
far={0.8}	represente la distance max entre l’objet et le plan pour que l’ombre apparaisse
*/

// OrbitControls est un composant de @react-three/drei qui permet de contrôler la caméra en orbite autour d’une cible, offrant des interactions comme la rotation, le zoom et le déplacement (pan).
/*
minPolarAngle et maxPolarAngle limitent la rotation verticale de la caméra au point 90°.
enableZoom={false}: La distance entre la caméra et l’objet reste fixe sur la cible (les deux doigts balayer sur la souris n'auront plus d'effet).
enablePan={false}: La caméra reste centrée sur la cible.
*/

