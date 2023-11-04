import Link from "next/link"
export default function About() {
    const details=[
        { id : 1, name: 'Yash', role: 'Senior Developer'},
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        ]
    return (
        <>
            <h1>About Page</h1>
            <div>
                {
                    details.map((e,i) => {
                        return (
                            <div key={i}>
                                <Link href={`/about/${e.id}`}>
                                {e.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <Link href="/">Link to home page</Link>
        </>
    )
}