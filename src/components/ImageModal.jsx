function ImageModal({ image, alt, onClose }) {
  if (!image) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative max-h-[90vh] max-w-5xl rounded-3xl p-3"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-white backdrop-blur-xl transition hover:bg-purple-500/40"
        >
          ✕
        </button>

        <img
          src={image}
          alt={alt}
          className="max-h-[85vh] max-w-full rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default ImageModal;