export default function Services() {
    return (
      <div className="mx-16 p-6 flex flex-col md:flex-row">
        <div className="w-[50%] flex flex-col flex-wrap space-y-8">
          <h2>Full development cycle</h2>
          <p>We use proven technologies</p>
          <div>
            <h3>Web</h3>
            <p>
            PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Next / MySQL / Laravel / GO / django / Python
            </p>
          </div>
          <div>
            <h3>Mobile</h3>
            <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit / Test / Navigation</p>
          </div>
        </div>
        <div className="w-[50%] p-7">
          <ul className="space-y-7">
            <li>iOS development &gt;</li>
            <li>Android development &gt;</li>
            <li>Web development &gt;</li>
            <li>UI/UX design &gt;</li>
            <li>Testing &gt;</li>
            <li>IT consulting &gt;</li>
          </ul>
        </div>
      </div>
    )
  }