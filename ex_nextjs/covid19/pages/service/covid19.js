import axios from "axios";

export async function getStaticProps(){
    const data=await axios.get('http://localhost:8080/covids');
    
    return {
        props: {
            covids: data.data
        }
    }
}