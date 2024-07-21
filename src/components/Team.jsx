export default function Team() {
    return (
      <div className="flex flex-col md:flex-row py-20 bg-blue-50">
        <div className="container mx-auto px-4 w-[50%]">
          <h2 className="text-3xl font-bold text-center mb-12">Our team</h2>
          <p className="text-center mb-8">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
          <div className="flex justify-center space-x-12 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">28</div>
              <div>team members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+100</div>
              <div>projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7 years</div>
              <div>in IT sphere</div>
            </div>
          </div>
          <p className="text-center">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
        </div>
        <div className="px-6">
          <img src="https://s3-alpha-sig.figma.com/img/6208/80bf/5e83a8ecb37adc3c547562b3daeded65?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOSA~KZJBSTmN~9W108m9znbOOyybabFPeNcRiMogP3pIxo2o4WPfIIi493gzIFx48KhLvI2OYNroHaZRaX7ya30v4lK7x2zBhw98lF5LvCs8N-akiWc8AjWOO~pcQYek3jbhRxV3e1gu7Ax6or0WtkXKiMZYr7HhC5tHBzbQXQwb~S9X9SZpvGuBguiBY3nHye4KFP5iGGt6pQzWusqL3MVrGMLUgKWee35fFn8DjbkI8s~y9aS4mJxK5CjEmipo6T4dPvL7iBePxzv7wER1Rk64UJuTqekP1lpaIKoT0bVLG1tbqdO0FCi5rePgwkEzHWjgmkg6Y3cmV3YfDvu7w__" alt="" />
        </div>
      </div>
    )
  }