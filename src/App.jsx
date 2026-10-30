import BootScreen from './components/BootScreen.jsx';
import LinkSection from './components/LinkSection.jsx';
import { sections, email } from './data/links.js';

export default function App() {
  return (
    <div id="mainscreen">
      <BootScreen />
      {sections.map((section) => (
        <LinkSection key={section.title} {...section} />
      ))}
      <section className="subheader">
        READY
        <br />
        10 PRINT "<a href={`mailto:${email}`}>{email}</a>"
        <br />
        20 GOTO 10
        <br />
        <br />
      </section>
    </div>
  );
}
