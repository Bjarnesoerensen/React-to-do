export function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
  const taglines = [
    "Mr. Greek is coming!",
    "This is a never ending story.",
    "This is your destiny."
  ];

  return randomArrayItem(taglines);
}
