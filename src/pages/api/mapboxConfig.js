function handler(req, res) {
  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN;
  const mapboxStyle = process.env.MAPBOX_STYLE;

  if (!mapboxToken || !mapboxStyle) {
    res.status(500).json({ error: "Mapbox token or style URL is missing" });
    return;
  }

  res.status(200).json({ mapboxToken, mapboxStyle });
}

module.exports = handler;
// Ensure Next sees a default export even under CJS:
module.exports.default = handler;
