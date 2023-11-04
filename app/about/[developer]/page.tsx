export default function Developer({ params }: { params: { developer:string } }) {
    console.log("check developer name",params.developer)
   const details=[
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]
   const name=details.find(e=>e.id===Number(params.developer))
    return (
        <>
            <h1>Name of the developer:{name?name.name:"enter a valid developer id"}</h1>
        </>
    )
}