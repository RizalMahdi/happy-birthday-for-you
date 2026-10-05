export type Photo = {
  src?: string;
  caption: string;
  emoji: string;
};

export type Letter = {
  title: string;
  body: string;
};

/**
 * Semua konten website dikumpulkan di satu file ini.
 * Ganti nilai-nilai placeholder di bawah dengan data asli —
 * tidak perlu menyentuh komponen sama sekali.
 */
export const content = {
  /** Nama orang yang dirayakan */
  name: "Sayang",

  /** Tanggal ulang tahun (ISO-8601, lengkap dengan zona waktu). Countdown berhenti setelah lewat. */
  birthdayDate: "2026-12-18T19:00:00+07:00",

  /** Tanggal ditampilkan seperti apa */
  birthdayLabel: "18 Desember 2026",

  cover: {
    eyebrow: "Untuk",
    subtitle: "Ada sesuatu yang kubuat khusus untuk hari spesialmu.",
    buttonLabel: "Buka Kejutan",
    hint: "Tarik napas dulu, lalu klik pelan-pelan ✨",
  },

  countdown: {
    title: "Menuju hari spesialmu",
    labels: ["Hari", "Jam", "Menit", "Detik"] as const,
    passed: "Hari ini harinya kita merayakan 🎉",
  },

  cake: {
    title: "Tiup lilinnya",
    instruction: "Satu keinginan, satu tarikan napas... lalu tiup 💨",
    blownLabel: "Tiup lagi kalau mau 😄",
    message: (name: string) =>
      `Happy Birthday, ${name}! Semua keinginanmu tahun ini — yang kamu ceritakan dan yang kamu simpan sendiri — semoga satu per satu menjadi nyata.`,
  },

  gallery: {
    title: "Kenangan kita",
    subtitle: "Beberapa bingkai kecil yang selalu bikin tersenyum",
    photos: [
      { caption: "Foto kenangan 1 — hari pertama", emoji: "🌸" },
      { caption: "Foto kenangan 2 — tawa yang sama", emoji: "📸" },
      { caption: "Foto kenangan 3 — perjalanan kita", emoji: "🚗" },
      { caption: "Foto kenangan 4 — makan berdua", emoji: "🍰" },
      { caption: "Foto kenangan 5 — diam pun terasa cukup", emoji: "🌙" },
      { caption: "Foto kenangan 6 — menuju tahun berikutnya", emoji: "💞" },
    ] as Photo[],
  },

  letters: {
    title: "Tiga surat kecil",
    subtitle: "Klik satu per satu, jangan dibaca buru-buru",
    items: [
      {
        title: "Surat pertama",
        body: "Terima kasih sudah jadi tempat paling nyaman untuk pulang. Di antara semua hal yang berubah tahun ini, kamu tetap hal yang paling ingin aku jaga.",
      },
      {
        title: "Surat kedua",
        body: "Aku suka caramu tertawa — bahkan untuk hal-hal kecil yang orang lain lewatkan. Semoga tahun ini memperbanyak momen-momen itu.",
      },
      {
        title: "Surat ketiga",
        body: "Happy birthday, sayang. Hari ini dunia merayakan hari kamu hadir, dan aku merayakannya setiap hari. I love you — today, tomorrow, and all the days after.",
      },
    ] satisfies Letter[],
  },

  song: {
    src: "/song.mp3",
    title: "Lagu untukmu",
    placeholderHint: "Pasang lagu: letakkan file di public/song.mp3",
  },

  closing: {
    message:
      "Terima kasih sudah mengizinkan hari kecil ini jadi berarti. Sampai tahun-tahun berikutnya, dan yang setelahnya lagi.",
    signature: "Dengan sayang, selalu 💗",
  },
};
