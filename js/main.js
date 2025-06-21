const shareIcon = document.querySelector(".share-card__icon-share");
const shareCard = document.querySelector(".share-card");

const handleShare = function (event) {
  const existingShareElement = document.querySelector(
    ".share-card__share-toast"
  );

  if (existingShareElement) {
    existingShareElement.remove();
    shareIcon.classList.remove("share-card__icon-share--grey");
    return;
  }

  const shareElement = document.createElement("div");
  shareElement.classList.add("share-card__share-toast");

  if (window.innerWidth <= 375) {
    shareElement.innerHTML = `
    <p>share</p>
    <div>
        <img tabindex='0' data-network="facebook" src="./images/icon-facebook.svg" alt="facebook icon" />
        <img tabindex='0' data-network="twitter" src="./images/icon-twitter.svg" alt="twitter icon" />
        <img tabindex='0' data-network="pinterest" src="./images/icon-pinterest.svg" alt="pinterest icon" />
    </div>
    <div tabindex='0' class="share-card__icon-share">
        <img src="./images/icon-share.svg" alt="share icon" />
    </div>
  `;
  } else {
    shareElement.innerHTML = `
    <p>share</p>
    <div>
        <img tabindex='0' data-network="facebook" src="./images/icon-facebook.svg" alt="facebook icon" />
        <img tabindex='0' data-network="twitter" src="./images/icon-twitter.svg" alt="twitter icon" />
        <img tabindex='0' data-network="pinterest" src="./images/icon-pinterest.svg" alt="pinterest icon" />
    </div>
  `;
  }
  if (window.innerWidth <= 375) {
    shareCard.append(shareElement);
    const toastShareIcon = document.querySelector(
      ".share-card__share-toast .share-card__icon-share"
    );
    toastShareIcon.addEventListener("click", handleShare);
  } else {
    shareIcon.classList.add("share-card__icon-share--grey");
    shareIcon.append(shareElement);
  }
  addShareSocialListeners(shareElement);
};

function addShareSocialListeners(shareElement) {
  const solutionUrl = `https://www.frontendmentor.io/solutions/responsive-article-preview-component-1Ibx2gX5FP`;
  const shareText = encodeURIComponent(
    `Danijel's Solution for Frontend Mentor Challenge Article Preview Compoennet.
    You can see the solutuon here: `
  );
  shareElement
    .querySelectorAll(".share-card__share-toast div img")
    .forEach((img) => {
      img.addEventListener("click", (e) => {
        let shareUrl = "";
        const network = img.dataset.network;
        if (network === "facebook") {
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${solutionUrl}`;
        } else if (network === "twitter") {
          shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
        } else if (network === "pinterest") {
          shareUrl = `https://pinterest.com/pin/create/button/?description=${shareText}&media=${solutionUrl}`;
        }
        if (shareUrl) {
          window.open(shareUrl, "_blank", "noopener");
        }
      });
    });
}

shareIcon.addEventListener("click", handleShare);
