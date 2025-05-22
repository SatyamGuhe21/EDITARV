const pricingData = [
  {
    plan: "Quick Edit Lift",
    price: "$15",
    features: [
      "Delivery Time: 1 Day",
      "Number of Revisions: 3",
      "Footage Provided (Minutes): 5",
      "Running Time (Minutes): 1",
      "Color Grading",
      "Sound Design & Mixing",
      "Subtitles",
    ],
  },
  {
    plan: "Viral Maker",
    price: "$90",
    features: [
      "Delivery Time: 1 Day",
      "Number of Revisions: Unlimited",
      "Footage Provided (Minutes): 15",
      "Running Time (Minutes): 6",
      "Color Grading",
      "Sound Design & Mixing",
      "Subtitles",
    ],
  },
  {
    plan: "Engagement Enhancer",
    price: "$40",
    features: [
      "Delivery Time: 1 Day",
      "Number of Revisions: 5",
      "Footage Provided (Minutes): 10",
      "Running Time (Minutes): 2",
      "Color Grading",
      "Sound Design & Mixing",
      "Subtitles",
    ],
  },
  
];
const Pricing = () => {
  return (
    <section className="/30 py-20 text-center">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Choose your <span className="text-accent">plan</span>
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.plan}
              </h3>
              <p className="text-2xl font-bold text-accent mb-4">{plan.price}</p>

              <ul className="text-white/80 text-sm space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>

              <button className="btn border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
