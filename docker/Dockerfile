# ---------------------------------------------------------
# Stage 1: Build packwiz and generate deployment hashes
# ---------------------------------------------------------
FROM golang:1.25 AS packwiz-builder

RUN go install github.com/packwiz/packwiz@latest

WORKDIR /pack

COPY . .

RUN /go/bin/packwiz refresh --build


# ---------------------------------------------------------
# Stage 2: Resolve the server-side pack
# ---------------------------------------------------------
FROM eclipse-temurin:21-jre AS pack-installer

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /pack

COPY --from=packwiz-builder /pack /pack

RUN curl -fsSL \
    https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar \
    -o /packwiz-installer-bootstrap.jar

# Serve our locally-built pack over HTTP because packwiz-installer
# expects the pack to be available via HTTP/HTTPS.
RUN mkdir -p /server \
    && python3 -m http.server 8080 --directory /pack >/tmp/packwiz-http.log 2>&1 & \
    HTTP_PID=$!; \
    sleep 2; \
    cd /server; \
    java -jar /packwiz-installer-bootstrap.jar \
        -g \
        -s server \
        http://127.0.0.1:8080/pack.toml; \
    STATUS=$?; \
    kill $HTTP_PID || true; \
    exit $STATUS


# ---------------------------------------------------------
# Stage 3: Minecraft runtime
# ---------------------------------------------------------
FROM itzg/minecraft-server:java21

COPY --from=pack-installer /server /pack-template