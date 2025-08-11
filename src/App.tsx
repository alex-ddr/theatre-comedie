export default function App() {
  return (
    <section className="m-8 w-2/5 place-self-center overflow-hidden rounded-3xl border-2 border-slate-300 bg-slate-100 shadow-xl transition ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200">
      <div className="aspect-6/7 w-full overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/960px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg"
          className="h-full w-full object-cover object-top"
          alt="Dwayne Johnson"
        />
      </div>
      <div className="card">
        <h2 className="mb-2 text-2xl font-extrabold text-gray-900">
          Dwayne "The Rock" Johnson
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Dwayne Douglas Johnson (born May 2, 1972), also known as The Rock, is
          an American actor, producer, businessman, and former professional
          wrestler. He is widely regarded as one of the greatest professional
          wrestlers of all time.
        </p>
        <button className="mt-2 rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-white shadow transition ease-in-out hover:cursor-pointer hover:bg-yellow-500 active:scale-90">
          Voir plus
        </button>
      </div>
    </section>
  );
}
