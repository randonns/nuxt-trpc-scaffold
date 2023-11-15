# Nuxt/tRPC Scaffold

Nuxt와 tRPC를 사용한 웹 애플리케이션의 기초 골격을 구성해서 예제로 활용한다.

구체적으로 다음 기술들을 사용한다.

- Nuxt
- tRPC
- Drizzle ORM
- Bootstrap 5
- Bun

## 디렉토리 구조

| 디렉토리명 | 설명                                                     |
| ---------- | -------------------------------------------------------- |
| db         | MariaDB의 스키마를 생성하는 DDL                          |
| docker     | 개발용 api, web의 Docker 이미지를 만드는데 필요한 파일들 |
| api        | API Server                                               |
| web        | Web Front-end                                            |

## Development Environment

개발 환경 구축을 위해 [Docker Desktop](https://www.docker.com/products/docker-desktop)을 설치하고, 루트 디렉토리에서 다음 명령을 실행하면 필요한 컨테이너들이 구동된다.

```shell
$ docker compose up
```

컨테이너 내에서 동작하는 서버는 소스 코드가 변경되면 자동으로 재시작된다.

## Issues

- `error: failed to save lockfile: AccessDenied` : https://github.com/oven-sh/bun/issues/4314
  - Bun을 Docker 내에서 사용할 때 발생하는 문제로 보임
  - `bun install`에 `--no-save` 옵션을 추가해서 임시적으로 우회
- `error: script "dev" exited with code 11 (SIGSEGV)`
  - 처음에는 `nuxt dev`에 `--host 0.0.0.0` 옵션을 추가해서 해결된 것으로 보였음
  - `bun install`에 `--no-save` 옵션을 추가한 이후, 컨테이너를 다시 생성(down 후 up)할때마다 발생
