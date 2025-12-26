# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="Paul Roeland <paul@cleanclothes.org>" \
      org.label-schema.name="rfd2026-varnish" \
      org.label-schema.description="rfd2026 Varnish image." \
      org.label-schema.vendor="Paul Roeland"

COPY etc/varnish.vcl /etc/varnish/default.vcl
