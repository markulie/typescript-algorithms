export const isPrime = (n: number): boolean => {
  // First 100 prime numbers for quick initial check
  const first100Primes: number[] = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541,
  ]

  if (n <= 1) return false // Numbers less than or equal to 1 are not prime
  if (first100Primes.includes(n)) return true // Quick check for the first 100 primes
  if (n % 2 === 0 || n % 3 === 0) return false // Eliminate multiples of 2 and 3

  let i = 5
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false // Check divisibility by 6k ± 1
    i += 6
  }

  return true
}
