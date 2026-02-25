import { MdBackHand } from "react-icons/md";

export const Posts = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        <MdBackHand />
        Obtener datos
    </button>
};