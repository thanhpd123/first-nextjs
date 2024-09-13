const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log(">>> check props: ", params.id)
    return (
        <div>view dtail hoi dan it = {params.id}</div>
    )
}

export default ViewDetailBlog