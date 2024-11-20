export default function About() {
  return (
    <>
      <div className="m-10 flex flex-col">
        <h1 className="font-semibold">Про проект</h1>
        <p className="mb-10">Попытался продемонстрировать работу с API, не делая акцент на верстке</p>
        <p className="font-semibold">Использовал:</p>
        <ul className="mb-10">
          <li>React</li>
          <li>React router dom</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
        </ul>

        <ul className="">
          <li><a href="https://github.com/begleee">My github: @begleee</a></li>
          <li><a href="https://t.me/achiIIes" target="_blank">Find me on TG: @achiIIes</a></li>
          <li><address>E-mail: beglee06@gmail.com</address></li>
        </ul>
      </div>
    </>
  )
}
