FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine AS base
WORKDIR /app
EXPOSE 5001
ENV ASPNETCORE_URLS=http://*:5001

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build
WORKDIR /src
COPY ["azure-back/azure-back-resource/azure-back-resource.csproj", "azure-back-resource/"]
RUN dotnet restore "azure-back-resource/azure-back-resource.csproj"
COPY . .
WORKDIR "/src/azure-back/azure-back-resource"
RUN dotnet build "azure-back-resource.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "azure-back-resource.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "azure-back-resource.dll"]