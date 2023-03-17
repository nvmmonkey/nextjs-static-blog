import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
        {/**Must add a anchor for non-text href link */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/post">POSTS</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
