export default function BootScreen() {
  return (
    <>
      <div id="header">
        <br />
        **** COMMODORE 64 BASIC V2 ****
        <br />
        <br />
        64K RAM SYSTEM&nbsp;&nbsp;38911 BASIC BYTES FREE
        <br />
        <br />
      </div>
      READY.
      <img className="block" src="/images/cursor.gif" alt="" />
      <br />
      LOAD "*",8,1
      <br />
      <br />
      SEARCHING FOR *
      <br />
      LOADING
      <br />
      READY
      <br />
      <br />
      LIST
    </>
  );
}
