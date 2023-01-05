import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function Crypto() {
  return (
    <Layout title="crypto">
      <h1 className="mb-4 text-2xl text-center">
        Crypto test (암호 알고리즘 테스트)
      </h1>
      <div className="mx-auto max-w-screen-sm">
        <div className="button-link">
          <Link href="crypto/hash" className="text-xl">
            Hash function - 해시함수
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/hmac" className="text-xl">
            Message Authentication Code - 메시지인증코드
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/pbkdf2" className="text-xl">
            PBKDF2 - 패스워드기반키생성
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/passwordHash" className="text-xl">
            Password Hash Salting - 패스워드 해시
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/aes" className="text-xl">
            AES Encryption - 대칭키암호
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/rsaenc" className="text-xl">
            RSA Encryption - 공개키암호
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/rsasig" className="text-xl">
            RSA Signature - 전자서명
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/jwt" className="text-xl">
            JSON Web Token
          </Link>
        </div>
        <div className="button-link">
          <Link href="crypto/cert" className="text-xl">
            Certificate - 인증서
          </Link>
        </div>
      </div>
    </Layout>
  )
}
