export default function Developer({ params }: { params: { developer: string } }) {
    return (
        <>
            <h1>Name of the developer: {params.developer}</h1>
        </>
    )
}