import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CombatGymDelmenhorst() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {showPopup && (
        <motion.div
          className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-4 rounded-2xl shadow-xl z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="flex justify-between items-center gap-4">
            <span>🎉 Jetzt kostenloses Probetraining buchen!</span>
            <Button
              onClick={() => setShowPopup(false)}
              className="bg-white text-black hover:bg-gray-200"
            >
              Schließen
            </Button>
          </div>
        </motion.div>
      )}

      <header className="bg-gray-900 p-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Combat Gym Delmenhorst</h1>
        <p className="text-xl">Kampfsport, Fitness & Community</p>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Über uns</h2>
        <p className="text-gray-300 text-lg">
          Das Combat Gym Delmenhorst steht für Disziplin, Respekt und Stärke. Seit unserer Gründung haben wir uns zum Ziel gesetzt, Menschen aller Altersklassen den Zugang zu Kampfsportarten wie MMA, Kickboxen, Grappling, Ringen und Sambo zu ermöglichen. Unsere Community ist familiär, unterstützend und wachsend – genau wie unsere Mitglieder.
        </p>
      </section>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Unser Trainer-Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Alex – MMA Coach", "Jasmin – Kickboxen & Fitness", "Leon – Grappling & Ringen"].map((trainer, i) => (
            <Card key={i} className="bg-gray-800 text-white rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <img
                  src={`https://source.unsplash.com/random/300x300?person,${i}`}
                  alt={trainer}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{trainer}</h3>
                <p className="text-gray-400">Jahrelange Erfahrung und Leidenschaft für den Sport.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Kursangebot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Kickboxen", "MMA", "Grappling", "Sambo", "Ringen", "Krafttraining"].map((kurs, i) => (
            <Card key={i} className="bg-gray-800 text-white rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{kurs}</h2>
                <p className="text-gray-300">Jetzt informieren und mittrainieren!</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Kursplan</h2>
        <div className="bg-gray-800 p-6 rounded-2xl text-white">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr>
                <th className="p-2">Tag</th>
                <th className="p-2">Kurs</th>
                <th className="p-2">Uhrzeit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Montag", "Kickboxen", "18:00 - 19:30"],
                ["Dienstag", "MMA", "19:00 - 20:30"],
                ["Mittwoch", "Grappling", "18:00 - 19:30"],
                ["Donnerstag", "Ringen", "19:00 - 20:30"],
                ["Freitag", "Sambo", "18:00 - 19:30"],
                ["Samstag", "Krafttraining", "10:00 - 12:00"]
              ].map(([tag, kurs, zeit], i) => (
                <tr key={i} className="border-t border-gray-700">
                  <td className="p-2 font-semibold">{tag}</td>
                  <td className="p-2">{kurs}</td>
                  <td className="p-2">{zeit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Impressionen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.img
              key={num}
              src={`https://source.unsplash.com/random/800x600?gym,${num}`}
              alt="Combat Gym"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      <section className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Kontakt</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Dein Name"
            className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Deine Nachricht"
            rows={4}
            className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          ></textarea>
          <Button className="bg-red-600 hover:bg-red-700">Absenden</Button>
        </form>
      </section>

      <footer className="bg-gray-900 text-center p-4 mt-10">
        <p>📍 Brendelweg 168, 27755 Delmenhorst | ☎ 04221 123456 | ✉ info@combatgymdel.de</p>
        <p className="text-sm text-gray-400 mt-2">&copy; 2025 Combat Gym Delmenhorst</p>
      </footer>
    </div>
  );
}
