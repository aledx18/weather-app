function sanitizeUrl(url: string) {
  return url.replaceAll('&amp;', '&')
}

export default function MapL({ locat }: { locat: string }) {
  const srcU = `https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=${
    locat || 'New York'
  }+(my%20maps)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
  return (
    <div style={{ width: '100%' }}>
      <iframe
        style={{
          borderRadius: '15px',
          filter: 'opacity(0.7)'
        }}
        width='100%'
        height='205'
        src={sanitizeUrl(srcU)}
      />
    </div>
  )
}
