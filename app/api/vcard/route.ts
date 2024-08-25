import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const email = searchParams.get('email');
  const company = searchParams.get('company');
  const title = searchParams.get('title');

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
ORG:${company}
TITLE:${title}
END:VCARD`;

  return new NextResponse(vCardData, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard',
      'Content-Disposition': `attachment; filename="${name}.vcf"`,
    },
  });
}