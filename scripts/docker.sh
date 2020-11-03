docker build -t accuindex.azurecr.io/accuindex-frontend:1.1.2 .
docker push accuindex.azurecr.io/accuindex-frontend:1.1.2

docker run -p 9001:80 accuindex.azurecr.io/accuindex-frontend:1.1.2