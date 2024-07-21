export default function DevelopmentStages() {
  const stages = [
    { title: 'Analysis', description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.' , icon : "" },
    { title: 'Design', description: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces." },
    { title: 'Development', description: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.' },
    { title: 'Testing', description: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions' },
    { title: 'Launching', description: 'We design the application page and publish it in the App Store and Google Play stores.' },
    { title: 'Support', description: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.' },
  ]

  return (
    <section className="py-20 mx-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Application Development Stages</h2>
        <div className="flex -my-12">
          <div className="flex flex-col space-y-10 my-20">
            {stages.map((stage, index) => {
              if (index < 3) {
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                )
              }
            })}
          </div>
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/ad8c/bbf4/2fe0abf10a9dbe09a8119211ba203571?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F1W5tKyyMlt32lz2aLEZsu6jLcUNd93Dtom54DHJoI1Sp2SGkIIp-51wZJHCcQ9aavP95RH0gmuQtsrDDS8wO5Lpz524PSsxF9g9ua0Mc9IMXTPqXay~QXhXdy1Nqzas-PK7KWxJUPqG~xTJLIim3QkRCwtahgrlTZCq5B~F1KQdxn6n4f92MwhnUR3E6UZBAFgX8Htqr84kzXPPMiPzTJ8BBligh7HlYVhqZz5-AGVFzVDsifbwf8xrXLAHUr13B-boYIBjgepOGvX~T-2rShryr6Dtvtdr9FPDNmhc5MhiTpZ2DGbMa3HD3clp3-VkIRi8M8PalCwyp9N8HtI0OA__" alt="" />
          </div>
          <div className="flex flex-col space-y-10 my-20">
            {stages.map((stage, index) => {
              if (index > 2) {
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </section>
  )
}