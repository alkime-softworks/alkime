import React from "react"

// Original editorial illustrations, not product interface previews.
export const HeroArtwork = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 520 420"
    fill="none"
    focusable="false"
  >
    <path d="M43 76H477M43 346H477M86 43V377M437 43V377" stroke="#2d352b" />
    <circle cx="260" cy="210" r="169" stroke="#3b4535" strokeDasharray="2 7" />
    <rect
      x="108"
      y="82"
      width="211"
      height="211"
      transform="rotate(-11 213 188)"
      fill="#171e16"
      stroke="#768566"
      strokeWidth="1.5"
    />
    <path d="M85 154L342 104M116 311L373 261" stroke="#35412d" />
    <circle cx="321" cy="214" r="103" fill="#d5ef82" />
    <circle cx="305" cy="198" r="103" stroke="#edf0e2" strokeWidth="1.5" />
    <path
      d="M203 119L337 323H97Z"
      fill="#10120f"
      stroke="#edf0e2"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M165 264L203 198L248 266Z" stroke="#647452" strokeWidth="1" />
    <path
      d="M49 249C91 191 131 237 178 169C214 117 205 74 268 56"
      stroke="#70835b"
      strokeWidth="1.5"
      strokeDasharray="4 6"
      strokeLinecap="round"
    />
    <circle cx="49" cy="249" r="4" fill="#d5ef82" />
    <circle cx="268" cy="56" r="4" fill="#d5ef82" />
    <path d="M74 76H98M86 64V88M425 346H449M437 334V358" stroke="#768566" />
    <path
      d="M388 107L431 64M414 65L431 64L430 81"
      stroke="#edf0e2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="337" cy="323" r="5" fill="#d5ef82" />
  </svg>
)

export const CyclopsArtwork = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 560 360"
    fill="none"
    focusable="false"
  >
    <rect width="560" height="360" fill="#d5e9a0" />
    <g stroke="#a6bf78" strokeWidth="1.1">
      <path d="M-20 92C77 188 148 59 226 74C305 88 297 164 395 162C470 161 515 96 580 124" />
      <path d="M-20 110C79 206 149 77 226 92C305 106 297 182 395 180C470 179 515 114 580 142" />
      <path d="M-20 128C79 224 149 95 226 110C305 124 297 200 395 198C470 197 515 132 580 160" />
      <path d="M-20 146C79 242 149 113 226 128C305 142 297 218 395 216C470 215 515 150 580 178" />
      <path d="M-20 164C79 260 149 131 226 146C305 160 297 236 395 234C470 233 515 168 580 196" />
      <path d="M-20 182C79 278 149 149 226 164C305 178 297 254 395 252C470 251 515 186 580 214" />
      <path d="M-20 200C79 296 149 167 226 182C305 196 297 272 395 270C470 269 515 204 580 232" />
      <path d="M-20 218C79 314 149 185 226 200C305 214 297 290 395 288C470 287 515 222 580 250" />
      <path d="M-20 236C79 332 149 203 226 218C305 232 297 308 395 306C470 305 515 240 580 268" />
    </g>
    <path
      d="M103 253C113 183 213 226 202 164C190 97 273 52 321 94C369 136 322 156 365 183C401 206 460 139 456 107"
      stroke="#ecf4d8"
      strokeWidth="15"
      strokeLinecap="round"
    />
    <path
      d="M103 253C113 183 213 226 202 164C190 97 273 52 321 94C369 136 322 156 365 183C401 206 460 139 456 107"
      stroke="#243b29"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="103" cy="253" r="13" fill="#243b29" />
    <circle cx="103" cy="253" r="5" fill="#ecf4d8" />
    <circle
      cx="456"
      cy="107"
      r="14"
      fill="#ecf4d8"
      stroke="#243b29"
      strokeWidth="3"
    />
    <circle cx="456" cy="107" r="4" fill="#243b29" />
    <g fill="#243b29" stroke="#ecf4d8" strokeWidth="3">
      <circle cx="211" cy="124" r="7" />
      <circle cx="218" cy="109" r="7" />
      <circle cx="229" cy="96" r="7" />
    </g>
    <path d="M348 246V277M333 262H364" stroke="#536a3b" />
    <path d="M35 38H60M47 26V51M499 310H524M511 298V323" stroke="#789454" />
    <path d="M272 31H288M280 23V39" stroke="#789454" />
    <circle cx="103" cy="253" r="29" stroke="#779155" strokeDasharray="2 5" />
    <circle cx="456" cy="107" r="30" stroke="#779155" strokeDasharray="2 5" />
  </svg>
)

const toothPoints = Array.from({ length: 112 }, (_, i) => {
  const angle = (i * Math.PI * 2) / 112
  const radius = i % 4 === 0 || i % 4 === 3 ? 105 : 114
  return `${(radius * Math.cos(angle)).toFixed(2)},${(
    radius * Math.sin(angle)
  ).toFixed(2)}`
}).join(" ")

export const BikeCheckArtwork = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 560 360"
    fill="none"
    focusable="false"
  >
    <rect width="560" height="360" fill="#d7c7b3" />
    <path
      d="M37 277L516 81M37 296L516 100M46 315L525 119"
      stroke="#b8aa96"
      strokeWidth="1"
    />
    <path
      d="M144 69V302M421 49V294M52 180H509"
      stroke="#b8aa96"
      strokeDasharray="2 6"
    />
    <circle cx="292" cy="180" r="141" stroke="#b8aa96" />
    <circle cx="292" cy="180" r="127" stroke="#b8aa96" strokeDasharray="2 6" />
    <g transform="translate(292 180) rotate(-12)">
      <polygon points={toothPoints} fill="#263c30" />
      <circle r="94" stroke="#8ea078" strokeWidth="1" />
      <circle r="79" fill="#d7c7b3" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <path d="M-9 -83L-16 -27H16L9 -83Z" fill="#263c30" />
          <circle cy="-64" r="4" fill="#d7c7b3" />
        </g>
      ))}
      <circle r="33" fill="#263c30" />
      <circle r="18" fill="#d7c7b3" />
      <circle r="12" stroke="#263c30" />
    </g>
    <path
      d="M292 180L198 238"
      stroke="#718065"
      strokeWidth="1.5"
      strokeDasharray="3 5"
    />
    <circle
      cx="160"
      cy="260"
      r="44"
      fill="#d7c7b3"
      stroke="#263c30"
      strokeWidth="2"
    />
    <circle cx="160" cy="260" r="33" stroke="#8e9278" />
    <circle cx="160" cy="260" r="16" fill="#263c30" />
    <circle cx="160" cy="260" r="6" fill="#d7c7b3" />
    <path
      d="M397 74L435 52M425 51L436 51L430 61"
      stroke="#5b6e50"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="447" cy="277" r="24" fill="#263c30" />
    <path
      d="M435 277L443 285L459 268"
      stroke="#d5ef82"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M36 38H61M48 26V51M493 315H518M505 303V328" stroke="#8b9179" />
  </svg>
)
