FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://*:5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build
WORKDIR /src
COPY ["azure-back/azure-back/azure-back.csproj", "azure-back/"]
RUN dotnet restore "azure-back/azure-back.csproj"
COPY . .
WORKDIR "/src/azure-back/azure-back"
RUN dotnet build "azure-back.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "azure-back.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "azure-back.dll"]