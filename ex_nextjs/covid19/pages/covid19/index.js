import axios from "axios";

export default function Covid19({covids}){

    return(
        <>
        <h1>VietNam's COVID-19 Information </h1>
        <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recoreved</th>
                <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
            {
                covids.map((covid)=>{
                    return(
                    <tr key={covid.id}>
                        <td>{covid.date}</td>
                        <td>{covid.confirmed}</td>
                        <td>{covid.active}</td>
                        <td>{covid.recovered}</td>
                        <td>{covid.deaths}</td>
                    </tr>)
                })
            }

            </tbody>

        </table>
        </>

    )
}

export async function getStaticProps(){
    const data=await axios.get('http://localhost:8080/covids');
    
    return {
        props: {
            covids: data.data
        }
    }
}

