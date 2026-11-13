// Schema.org yapılandırılmış verisini <script type="application/ld+json"> olarak basar.
// "<" kaçışı, içerikteki metnin script etiketini kapatmasını engeller.
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
