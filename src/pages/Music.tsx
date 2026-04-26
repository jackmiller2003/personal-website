import Layout from '../components/Layout'

const albums = [
  {
    title: 'The Complete Village Vanguard Recordings',
    artist: 'Bill Evans',
    year: '1961',
    href: 'https://open.spotify.com/album/0rdlBkBl9UWoLDcEfxAkU5',
  },
  {
    title: 'Sail Away',
    artist: 'Randy Newman',
    year: '1972',
    href: 'https://open.spotify.com/album/7ojNQckNp7Tj2BkLJCiiUL',
  },
  {
    title: 'Tea for the Tillerman',
    artist: 'Cat Stevens',
    year: '1970',
    href: 'https://open.spotify.com/album/44VxbAytHpVi3Rq8hRhild',
  },
  {
    title: 'Tommy Flanagan Trio',
    artist: 'Tommy Flanagan',
    year: '1960',
    href: 'https://open.spotify.com/album/6ib55A9F22eHSqsVDjQPvu',
  },
  {
    title: 'Harvest',
    artist: 'Neil Young',
    year: '1972',
    href: 'https://open.spotify.com/album/2l3QxNo4QubBNmVKxLeum0',
  },
  {
    title: 'Bookends',
    artist: 'Simon & Garfunkel',
    year: '1968',
    href: 'https://open.spotify.com/album/3bzgbgiytguTDnwzflAZr2',
  },
  {
    title: "What's Going On",
    artist: 'Marvin Gaye',
    year: '1971',
    href: 'https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B',
  },
  {
    title: 'Two Against Nature',
    artist: 'Steely Dan',
    year: '2000',
    href: 'https://open.spotify.com/album/2MJc2N3eFVT0ZabBN4zc32',
  },
]

export default function Music() {
  return (
    <Layout>
      <h3>Music</h3>
      <ul id="music-list">
        {albums.map((album) => (
          <li key={album.href}>
            <a href={album.href} target="_blank" rel="noreferrer">
              <span className="music-title">{album.title}</span>
              <span className="music-meta">
                {album.artist}{album.year ? ` · ${album.year}` : ''}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
