import { useState } from "react";

export function TwitterFollowCard({ userName, children, initIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initIsFollowing);

  const avatarImagePath = `src\\assets\\${userName}.png`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "p-followCard-button is-following"
    : "p-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="p-followCard">
      <header className="p-followCard-header">
        <img
          className="p-followCard-avatar"
          src={avatarImagePath}
          alt="El avatar de perfil"
        />
        <div className="p-followCard-info">
          <strong>{children}</strong>
          <span className="p-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="p-followCard-text">{text}</span>
          <span className="p-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
