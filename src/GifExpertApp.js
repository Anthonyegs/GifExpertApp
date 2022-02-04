import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    categories.map(c => (
                        <GifGrid
                            key={c}
                            category={c}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
