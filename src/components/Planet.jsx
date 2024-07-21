export default function Planet() {
    return (
        <div className="m-16 p-6 hidden md:block">
            <hr />
            <div className="flex space-x-10 flex-wrap">
                {[...Array(5)].map((_, i) => (
                    <img className="h-25 w-40" key={i} src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__" alt="planet" />
                ))}
            </div>
            <hr />
        </div>
    )
}